/*
SUPABASE — CONFIGURAÇÃO DO ÁLBUM LENDAS DA BOLA 2026
Projeto: matriz-educacional
*/

const SUPABASE_URL = "https://cxxlsapgodwckrhkbwpo.supabase.co";
const SUPABASE_KEY = "sb_publishable_myoZQmhn0sAEgkvLkRGoFQ_u18JJjPm";

let supabaseClient = null;

try {
  if (
    typeof supabase !== "undefined" &&
    SUPABASE_URL &&
    SUPABASE_KEY &&
    !SUPABASE_URL.includes("COLE_AQUI") &&
    !SUPABASE_KEY.includes("COLE_AQUI")
  ) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("Supabase conectado com sucesso.");
  } else {
    console.warn("Supabase ainda não configurado.");
  }
} catch (erro) {
  console.error("Erro ao conectar Supabase:", erro);
}