import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ihpibeftrhmaucxunwez.supabase.co";
const supabaseKey = "sb_publishable_YZ2fxZmnaQ4ZRL6-uFzppw_qYb9hU5m";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
