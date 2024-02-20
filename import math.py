import math

def equation(theta, x, alpha):
    a_sq = (9 + x * math.cos(alpha))**2 + (31 - x * math.sin(alpha))**2
    b_sq = (9 + x * math.cos(alpha))**2 + (x * math.sin(alpha) - 6)**2
    return math.acos((a_sq + b_sq - 625) / (2 * math.sqrt(a_sq) * math.sqrt(b_sq)))

def derivative(theta, x, alpha):
    h = 1e-6  # Hapi i vogël për të llogaritur derivatin
    f_x = equation(theta, x, alpha)
    f_x_plus_h = equation(theta + h, x, alpha)
    return (f_x_plus_h - f_x) / h

def newton_raphson(initial_guess, x, alpha, tolerance=1e-6, max_iterations=100):
    theta = initial_guess
    for i in range(max_iterations):
        f = equation(theta, x, alpha)
        f_prime = derivative(theta, x, alpha)
        theta -= f / f_prime
        if abs(f) < tolerance:
            return theta
    return None  # Kthimi None nëse nuk arrin konvergjencën

# Testimi i kodit
initial_guess = 0.5  # Vlera fillestare e thetës
x = 1.2  # Vlera e x
alpha = math.pi / 4  # Vlera e alfas
solution = newton_raphson(initial_guess, x, alpha)

if solution is not None:
    print("Rrënja e ekuacionit është: ", solution)
else:
    print("Metoda nuk arriti të gjente rrënjën.")
import math

def equation(theta, x, alpha):
    a_sq = (9 + x * math.cos(alpha))**2 + (31 - x * math.sin(alpha))**2
    b_sq = (9 + x * math.cos(alpha))**2 + (x * math.sin(alpha) - 6)**2
    return math.acos((a_sq + b_sq - 625) / (2 * math.sqrt(a_sq) * math.sqrt(b_sq)))

def derivative(theta, x, alpha):
    h = 1e-6  # Hapi i vogël për të llogaritur derivatin
    f_x = equation(theta, x, alpha)
    f_x_plus_h = equation(theta + h, x, alpha)
    return (f_x_plus_h - f_x) / h

def newton_raphson(initial_guess, x, alpha, tolerance=1e-6, max_iterations=100):
    theta = initial_guess
    for i in range(max_iterations):
        f = equation(theta, x, alpha)
        f_prime = derivative(theta, x, alpha)
        theta -= f / f_prime
        if abs(f) < tolerance:
            return theta
    return None  # Kthimi None nëse nuk arrin konvergjencën

# Testimi i kodit
initial_guess = 0.5  # Vlera fillestare e thetës
x = 1.2  # Vlera e x
alpha = math.pi / 4  # Vlera e alfas
solution = newton_raphson(initial_guess, x, alpha)

if solution is not None:
    print("Rrënja e ekuacionit është: ", solution)
else:
    print("Metoda nuk arriti të gjente rrënjën.")
