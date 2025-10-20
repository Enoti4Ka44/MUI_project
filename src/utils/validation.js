export function validateUsername(username) {
    if (!username) {
        return "Username is necessary"
    }

    if (username.length < 3) {
        return "Username must be at least 3 characters"
    }

    return null
}

export function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return "Email is necessary"
    }

    if (!pattern.test(email)) {
      return "Invalid email";
    }

    return null

}

export function validatePassword(password) {
    if (!password) {
        return "Password is necessary"
    }
    if (password.length < 8) {
        return "Passwords must be at least 8 characters";
    }

    return null
}

export function validateConfirmPassword(confirmPassword) {
    if (!confirmPassword) {
        return "Please confirm your password"
    }

    if (confirmPassword !== password) {
        return "Passwords must match"
    }

    return null
}
