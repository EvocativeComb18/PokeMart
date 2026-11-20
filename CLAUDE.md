# Proyecto: Tienda de cartas Pokémon (fase 1)

## Qué es
Tienda en línea de un solo vendedor (cliente: Javi). Estilo Apple: fondo oscuro, cartas al frente. Sitio en español (MX), moneda MXN.

## Stack
Next.js (App Router) + TypeScript + Tailwind, Supabase (Postgres, Auth, Storage), Mercado Pago Checkout Pro, Vercel.

## Alcance fase 1 (no agregar nada más)
Catálogo con filtros, detalle de carta, carrito, pago con Mercado Pago, panel admin (cartas y pedidos), envío con tarifa fija, correos de pedido, páginas legales.
Fuera de alcance: otros vendedores, comisiones, verificación de vendedores, precios automáticos, guías de envío automáticas.

## Reglas
- Trabaja en pasos pequeños. Antes de cambios grandes, propón un plan y espera mi aprobación.
- Nunca guardes datos de tarjeta. El pago va por el checkout de Mercado Pago.
- El precio siempre se calcula en el servidor, nunca se confía en el del navegador.
- Verifica la firma de los webhooks de pago.
- Secretos solo en .env.local, nunca en el código ni en git.
- Activa RLS en todas las tablas de Supabase. El panel admin solo para usuarios admin.
- Explica en español sencillo qué hiciste y cómo probarlo.
- Haz commit al terminar cada paso que funcione.

## Diseño
Referencia visual: design/index.html (fondo negro, texto #f5f5f7, acento #2997ff, fuente del sistema).
