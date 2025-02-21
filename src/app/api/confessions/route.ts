import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

// GET Confessions
export async function GET() {
  const { data, error } = await supabase
    .from("confessions")
    .select("*");
    // .order("created_at", { ascending: false});

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
