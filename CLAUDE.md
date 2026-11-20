{\rtf1\ansi\ansicpg1252\cocoartf2908
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Proyecto: Tienda de cartas Pok\'e9mon (fase 1)\
\
## Qu\'e9 es\
Tienda en l\'ednea de un solo vendedor (cliente: Javi). Estilo Apple: fondo oscuro, cartas al frente. Sitio en espa\'f1ol (MX), moneda MXN.\
\
## Stack\
Next.js (App Router) + TypeScript + Tailwind, Supabase (Postgres, Auth, Storage), Mercado Pago Checkout Pro, Vercel.\
\
## Alcance fase 1 (no agregar nada m\'e1s)\
Cat\'e1logo con filtros, detalle de carta, carrito, pago con Mercado Pago, panel admin (cartas y pedidos), env\'edo con tarifa fija, correos de pedido, p\'e1ginas legales.\
Fuera de alcance: otros vendedores, comisiones, verificaci\'f3n de vendedores, precios autom\'e1ticos, gu\'edas de env\'edo autom\'e1ticas.\
\
## Reglas\
- Trabaja en pasos peque\'f1os. Antes de cambios grandes, prop\'f3n un plan y espera mi aprobaci\'f3n.\
- Nunca guardes datos de tarjeta. El pago va por el checkout de Mercado Pago.\
- El precio siempre se calcula en el servidor, nunca se conf\'eda en el del navegador.\
- Verifica la firma de los webhooks de pago.\
- Secretos solo en .env.local, nunca en el c\'f3digo ni en git.\
- Activa RLS en todas las tablas de Supabase. El panel admin solo para usuarios admin.\
- Explica en espa\'f1ol sencillo qu\'e9 hiciste y c\'f3mo probarlo.\
- Haz commit al terminar cada paso que funcione.\
\
## Dise\'f1o\
Referencia visual: design/index.html (fondo negro, texto #f5f5f7, acento #2997ff, fuente del sistema).}