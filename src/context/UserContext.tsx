'use client'; // Add this at the top to make the file a client component

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/utils/supabase/client';

interface User {
  id: string;
  email: string;
  username: string;
  isAdmin: boolean;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      const { data: user, error } = await supabaseClient.auth.getUser();

      if (error) {
        if (error.message === 'Auth session missing!') {
          console.warn('No active session found, user is not logged in.');

          return;
        }
        console.error('Error fetching user:', error.message);
        return;
      }

      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select("*")
        .eq("id", user.user.id)
        .eq('isAdmin', true)
      .single();
      
      if (profileError || !profile) {
        setUser(null);
      } else {
        console.warn(`this is context profile: ${JSON.stringify(profile, null, 2)}`);

        setUser({
          id: user?.user.id,
          email: user.user.email!,
          username: profile?.username,
          isAdmin: profile?.isAdmin,
        })
      }

      setLoading(false);
    };

    fetchUser();
  }, [user]);

  const logout = async () => {
    await supabaseClient.auth.signOut();
    setUser(null);
    router.push('/auth/login');
  };

  return (
    <UserContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};