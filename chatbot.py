from chatterbot import ChatBot

chatbot = ChatBot('GianiBot')

# Test the chatbot with a simple input
response = chatbot.get_response("Hello, how are you?")
print(response)