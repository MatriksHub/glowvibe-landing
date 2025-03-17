'use client'; // Add this at the top to make the file a client component

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

interface User {
  uid: string;
  email: string;
  username: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        if (error.message === 'Auth session missing!') {
          console.warn('No active session found, user is not logged in.');

          return;
        }
        console.error('Error fetching user:', error.message);
        return;
      }

      if (data?.user) {
        setUser({
          uid: data.user.id,
          email: data.user.email!,
          username: data.user.user_metadata?.username || '',
          role: data.user.user_metadata?.role || 'user',
        });
      }

      const { data: roleData, error: roleError } = await supabase
        .from('user_role')
        .select('role')
        .eq('id', data?.user?.id)
      .single();
      
      setRole(roleData?.role || 'user');

      // remove
      if (roleError) {
        console.error('Failed to fetch role:', roleError.message);
        setRole(null);
      } else {
        console.log('User role:', roleData.role);
        setRole(roleData.role);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/auth/login');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
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