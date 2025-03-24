"use server";

import { supabaseClient } from "@/utils/supabase/client";
// import { createClient } from "@supabase/supabase-js";
// import { Database } from "@/types/global";
import { subDays, startOfMonth, startOfYear, formatISO } from "date-fns";

// export const supabaseClient = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );



// Get start date based on filter
function getStartDate(filter: "today" | "yesterday" | "month" | "year") {
  const now = new Date();
  switch (filter) {
    case "yesterday":
      return formatISO(subDays(now, 1));
    case "month":
      return formatISO(startOfMonth(now));
    case "year":
      return formatISO(startOfYear(now));
    default:
      return formatISO(now);
  }
}

export async function getDashboardStats(filter: "today" | "yesterday" | "month" | "year") {
  const startDate = getStartDate(filter);

  // Total Confessions
  const { count: totalConfessions } = await supabaseClient
    .from("confessions")
    .select("*", { count: "exact" })
    .gte("created_at", startDate);

  // Total Users
  const { count: totalUsers } = await supabaseClient
    .from("profiles")
    .select("*", { count: "exact" });

  // Total Expert Advice
  const { count: totalExpertAdvice } = await supabaseClient
    .from("confessions")
    .select("*", { count: "exact" })
    .not("expert_advice", "is", null);

  // Top 5 Active Users
//   const { data: activeUsers } = await supabaseClient
//     .from("profiles")
//     .select("username, confessions(count)")
//     .order("confessions.count", { ascending: false })
//     .limit(5);

  // 3 Most Recent Confessions
//   const { data: recentConfessions } = await supabaseClient
//     .from("confessions")
//     .select("title, user(username), created_at")
//     .order("created_at", { ascending: false })
//     .limit(5);

  return {
    totalConfessions: totalConfessions ?? 0,
    totalUsers: totalUsers ?? 0,
    totalExpertAdvice: totalExpertAdvice ?? 0,
    // activeUsers: activeUsers?.map((user) => ({
    //   username: user.username,
    //   confessionCount: user?.confessions?.count || 0,
    // })) ?? [],

    // recentConfessions: recentConfessions?.map((confession) => ({
    //   title: confession.title,
    //   username: confession.user.username,
    //   created_at: confession.created_at,
    // })) ?? [],
  };
}
