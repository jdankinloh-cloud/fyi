const SUPABASE_URL = 'https://whfwemrbrlvuguciettf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZndlbXJicmx2dWd1Y2lldHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NzQ1OTgsImV4cCI6MjA5MjQ1MDU5OH0.GzhH2zcHEyRgksGp-V-OVEK6410dXANxHdSW1w0dPAM';

const SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SUPABASE_CONFIG;
}
