<template>
    <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required placeholder="Enter your email" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required
                    placeholder="Enter your password" />
            </div>
            <button type="submit" :disabled="loading">Login</button>
            <p v-if="error" class="error-message">{{ error }}</p>
        </form>
    </div>
</template>

<script>
import api from "@/mixins/api";

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            loading: false,
            error: '',
        };
    },
    mixins: [api],
    methods: {
        async handleSubmit() {
            this.loading = true;
            this.error = '';

            try {
                const response = await fetch(`${this.url}/admin/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: this.form.email,
                        password: this.form.password,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Handle errors from the backend
                    switch (response.status) {
                        case 400:
                            throw new Error('Email and password are required.');
                        case 404:
                            throw new Error('Admin not found.');
                        case 401:
                            throw new Error('Invalid password.');
                        default:
                            throw new Error('An error occurred. Please try again.');
                    }
                }

                // Check if the token exists in the response
                if (data.token) {
                    // Save the token to localStorage
                    localStorage.setItem('authToken', data.token);
                    console.log('Login successful! Token:', data.token);

                    // Redirect to the admin dashboard or another page
                    this.$router.push('/admin/dashboard');
                } else {
                    throw new Error('Login failed. Please try again.');
                }
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    },
};
</script>

<style scoped>
.login-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>