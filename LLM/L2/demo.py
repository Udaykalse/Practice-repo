

from google import genai
import os


client = genai.Client(api_key="AIzaSyBpOLLniJAbrAqj_mo6vVuKtdj4Xbw61Qc")

def summarize_text(text):
    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=f"Summarize this: {text}"
    )
    return response.text

print("--- AI Summarizer (New SDK) ---")
user_input = input("Paste text: ")
print(summarize_text(user_input))