# TEST CASES: E-commerce TechGear US

**Project:** Operation Iron Judge
**QA:** Marco López
**Platform:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## 1. Happy Path

### TC-01: Successful Product Purchase

**Description:** Validate that the user can complete a purchase flow from login to checkout.

**Steps:**

1. Navigate to [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Enter username `standard_user` and password `secret_sauce`
3. Click on **Login**
4. Click **Add to cart** on the **"Sauce Labs Backpack"** product
5. Click on the **Cart** icon
6. Click on **Checkout**
7. Enter information: First Name: `Marco`, Last Name: `López`, Zip Code: `21001`
8. Click on **Continue**
9. Click on **Finish**

**Expected Result:**

- The system must display the message: `"Thank you for your order!"`

---

## 2. Negative Path

### TC-02: Login attempt with a blocked user

**Description:** Verify that the system prevents access to users with the status `locked_out_user`.

**Steps:**

1. Navigate to [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Enter username `locked_out_user` and password `secret_sauce`
3. Click on **Login**

**Expected Result:**

- The system must **not** allow access.
- It must display the error: `"Epic sadface: Sorry, this user has been locked out."`

---

## 3. Edge Case

### TC-03: Checkout with an empty cart

**Description:** Verify system behavior when attempting to checkout without any products in the cart.

**Steps:**

1. Navigate to [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Enter username `standard_user` and password `secret_sauce`
3. Click on **Login**
4. Click directly on the **Cart** icon
5. Click on the **Checkout** button

**Expected Result:**

- **Ideally:** The "Checkout" button should display an "Empty Cart" message.
- **Report Note:** Currently, the system allows proceeding with an empty cart.

---

## 4. AI Audit Criteria (Gemini)

For the TechGear US mission, product descriptions will be sent to the AI to identify:

- **Inappropriate text:** Offensive or unprofessional language.
- **False guarantees:** Phrases like "Lifetime Warranty" that are not included in the legal contract.
