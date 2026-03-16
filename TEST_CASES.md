# TEST CASES: E-commerce TechGear US

**Proyecto:** Operación Juez de Hierro
**QA:** Marco López
**Plataforma:** (https://www.saucedemo.com/)

---

## 1. Happy Path

### TC-01: Compra del producto con éxito

**Descripción:** Validar que el usuario puede completar una compra desde el login hasta el checkout.

**Pasos:**

1. Ingresar a [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ingresar usuario `standard_user` y contraseña `secret_sauce`
3. Hacer clic en **Login**
4. Hacer clic en **Add to cart** en el producto **"Sauce Labs Backpack"** para agregarlo al carrito
5. Hacer clic en el icono del **Carrito**
6. Hacer clic en **Checkout**
7. Ingresar datos: Nombre: `Marco`, Apellido: `López`, Código Postal: `21001`
8. Hacer clic en **Continue**
9. Hacer clic en **Finish**

**Resultado Esperado:**

- El sistema debe mostrar el mensaje: `"Thank you for your order!"`

---

## 2. Negative Path

### TC-02: Intento de Login con usuario bloqueado

**Descripción:** Verificar que el sistema impida el acceso a usuarios con status `locked_out_user`

**Pasos:**

1. Ingresar a [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ingresar usuario `locked_out_user` y contraseña `secret_sauce`
3. Hacer clic en **Login**

**Resultado Esperado:**

- El sistema **no** debe permitir el ingreso.
- Muestra el error: `"Epic sadface: Sorry, this user has been locked out."`

---

## 3. Edge Case

### TC-03: Checkout con el carrito vacío

**Descripción:** Verificar el comportamiento del sistema cuando se intenta pagar sin productos

**Pasos:**

1. Ingresar a [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ingresar usuario `standard_user` y contraseña `secret_sauce`
3. Hacer clic en **Login**
4. Hacer clic directamente en el icono del **Carrito**
5. Hacer clic en el botón **Checkout**

**Resultado Esperado:**

- **Idealmente:** El botón de "Checkout" debería mostrar un mensaje de "Carrito Vacío"
- **Nota para el reporte:** El sistema permite avanzar con el carrito vacío.

## 4. Criterios de Auditoría IA (Gemini)

Para la misión de TechGear US, se enviarán las descripciones de los productos a la IA buscando:

- **Texto inapropiado:** Lenguaje ofensivo o no profesional.
- **Garantías falsas:** Frases como "Garantía de por vida" que no estén en el contrato legal.
