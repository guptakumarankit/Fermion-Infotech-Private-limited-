# 🔐 OTP Validation App

A simple and user-friendly **OTP (One-Time Password) Validation App** built with **React**.  
This app allows users to enter a multi-digit OTP with smooth keyboard navigation, paste support, and validation feedback.

---

## 🚀 Features

### 1️⃣ Multi-Input OTP Fields
- Displays **5 input boxes** for OTP entry.
- Each input accepts **only one digit**.
- Automatically trims extra characters.

### 2️⃣ Numeric Validation
- Only numeric values are allowed.
- If a user enters non-numeric data:
  - ❌ Error toast notification appears.
  - Invalid input is rejected.

### 3️⃣ Auto Focus Navigation
- Automatically moves to the **next input field** after entering a digit.
- On **Backspace**, moves focus to the previous field if current field is empty.
- Automatically focuses on the **first input** when the app loads.

### 4️⃣ Paste Support
- Users can paste the entire OTP at once.
- Automatically distributes pasted digits across input fields.
- Accepts only numeric data.
- Shows error toast if pasted data contains non-numeric values.

### 5️⃣ Submit Button Visibility
- The **Submit button appears only when all OTP fields are filled**.
- Prevents incomplete OTP submission.

### 6️⃣ Success & Error Notifications
- Uses **react-hot-toast** for real-time notifications.
- Shows:
  - ✅ Success message on valid submission.
  - ❌ Error message for invalid input.

### 7️⃣ Auto Reset After Submission
- Clears all OTP fields after successful submission.
- Focus returns to the first input field.

---

## 🛠️ Tech Stack

- **React (Hooks)**
  - `useState`
  - `useEffect`
  - `useRef`
- **react-hot-toast** (for notifications)
- **Tailwind CSS** (for styling)

---

## 📂 Project Structure

```
src/
 ├── App.js
 └── index.js
```

---

## ⚙️ How It Works

### State Management
- `otpArr` → Stores OTP digits in an array.
- `allFilled` → Tracks whether all fields are completed.

### Key Functions

- `handleOnChange()` → Handles input changes & auto-focus.
- `handleMoves()` → Handles backspace navigation.
- `handlePaste()` → Handles OTP paste functionality.
- `handleSubmit()` → Handles OTP submission and reset.

---

## 📦 Installation

```bash
npm install
```

Install required dependency:

```bash
npm install react-hot-toast
```

---

## ▶️ Run the App

```bash
npm start
```

---

## 🎯 Customization

You can change the OTP length by modifying:

```js
const COUNT_NUMBER_OF_OTP = 5;
```

Update this number to any desired OTP length.

---

## 📸 UI Highlights

- Clean centered layout
- Responsive design
- Smooth focus transitions
- Interactive feedback with toast notifications

---

## 🧠 Future Improvements (Optional Ideas)

- Add OTP verification API integration
- Add timer with resend OTP feature
- Add mobile keyboard optimization
- Add accessibility improvements

---

## 📄 License

This project is open-source and free to use.

---

### 👨‍💻 Author
Built with ❤️ using React.
