def calculate_bmi():
    print("--- Python BMI Calculator ---")
    
    try:
        weight = float(input("Enter your weight in kg: "))
        height = float(input("Enter your height in meters (e.g., 1.75): "))
        bmi = weight / (height ** 2)
        
        bmi_formatted = round(bmi, 2)
        
        print(f"\nYour BMI is: {bmi_formatted}")

        if bmi < 18.5:
            category = "Underweight"
        elif 18.5 <= bmi < 24.9:
            category = "Normal weight"
        elif 25 <= bmi < 29.9:
            category = "Overweight"
        else:
            category = "Obese"

        print(f"Health Category: {category}")

    except ValueError:
        print("Error: Please enter valid numerical values for weight and height.")

if __name__ == "__main__":
    calculate_bmi()