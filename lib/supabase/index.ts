import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? 'https://dnlbkxckhwbefpzsfhnt.supabase.co'
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_API_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGJreGNraHdiZWZwenNmaG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTUzNDksImV4cCI6MjAzNDAzMTM0OX0.vagPT52vZDV66TnNmFrPiJnBiOe9txYt4Ueqm269M1o'

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export default supabase