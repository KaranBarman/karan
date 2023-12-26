import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xjfzhrqbmqysrubxjcbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZnpocnFibXF5c3J1YnhqY2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MTI0NzMsImV4cCI6MjAxOTA4ODQ3M30.40phOI3pDFXKDEXaahoLlZxJlJtbXNoLoodj8D8Ouks";

const supabase = createClient(supabaseUrl, supabaseKey);
