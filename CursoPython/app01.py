import matplotlib.pyplot as plt

dias = list(range(1, 20))
temperaturas = [25.5, 33.9, 24.0, 28.3, 27.7, 27.3, 29.0, 21.0, 21.2, 32.7, 24.8, 25.1, 27.8, 36.1, 22.1, 24.6, 21.1, 36.2, 27.0]

plt.plot(dias, temperaturas)
plt.title("Daily Temperatures in August")
plt.xlabel("Day")
plt.ylabel("Temperature (°C)")
plt.show()