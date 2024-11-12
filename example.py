import openai

# Example usage
response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Say hello to the world",
    max_tokens=5
)

print(response)