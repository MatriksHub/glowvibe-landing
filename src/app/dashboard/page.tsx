'use client'

import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
} from "@/components/ui/tabs";
// import { format } from "date-fns";
import { getDashboardStats } from '../api/overview/actions';

interface DashboardStats {
  totalConfessions: number;
  totalUsers: number;
  totalExpertAdvice: number;
  // activeUsers: { username: string; confessionCount: number }[];
  // recentConfessions: { title: string; username: string; created_at: string }[];
}

function OverviewPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [filter, setFilter] = useState<"today" | "yesterday" | "month" | "year">("today");

  useEffect(() => {
    async function fetchStats() {
      const data = await getDashboardStats(filter);
      setStats(data);
    }
    fetchStats();
  }, [filter]);

  return (
    <section className='space-y-6'>
      <div>
        <Tabs 
          value={filter} 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onValueChange={(value) => setFilter(value as any)}
        >
          <TabsList className="flex justify-start items-center space-x-2">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="font-semibold">Total Confessions</CardHeader>
            <CardContent className="text-3xl font-bold">
              {stats?.totalConfessions ?? 0}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-semibold">Total Users</CardHeader>
            <CardContent className="text-3xl font-bold">{stats?.totalUsers ?? 0}</CardContent>
          </Card>
          <Card>
            <CardHeader className="font-semibold">Total Expert Advice</CardHeader>
            <CardContent className="text-3xl font-bold">{stats?.totalExpertAdvice ?? 0}</CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Active Users */}
          <Card>
            <CardHeader className="font-semibold">Top 5 Active Users</CardHeader>
            <CardContent>
              {/* <ul className="space-y-2">
                {stats?.activeUsers.length ? (
                  stats.activeUsers.map((user, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{user.username}</span>
                      <span className="text-sm text-gray-500">{user.confessionCount} confessions</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No active users yet.</p>
                )}
              </ul> */}
            </CardContent>
          </Card>

          {/* Recent Confessions */}
          <Card>
            <CardHeader className="font-semibold">Recent Confessions</CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {/* {stats?.recentConfessions.length ? (
                  stats.recentConfessions.map((confession, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold">{confession.title}</span>
                      <span className="text-sm text-gray-500">
                        by {confession.username} - {format(new Date(confession.created_at), "PPP")}
                      </span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No recent confessions.</p>
                )} */}
              </ul>
            </CardContent>
          </Card>
        </div>
      
    </section>
  )
}

export default OverviewPage