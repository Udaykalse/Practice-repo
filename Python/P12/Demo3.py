import queue
import threading
import time

task_queue = queue.Queue()


def generate_massive_pdf(user_id):
    """Simulates a heavy, slow process."""
    print(f"[Worker] Starting heavy PDF generation for User {user_id}...")
    time.sleep(5)  
    return f"PDF_CONTENT_FOR_{user_id}"

def send_email(pdf_content):
    """Simulates sending an email."""
    print(f"[Worker] Emailing: {pdf_content}")

def background_worker():
    """ The engine that runs in the background, away from the user's eyes. """
    print("[Worker] Background worker is active and waiting for jobs...")
    while True:
        user_id = task_queue.get() 
        
        pdf = generate_massive_pdf(user_id)
        send_email(pdf)
        
        task_queue.task_done()
        print(f"[Worker] Finished job for User {user_id}.\n")


def handle_export_request(user_id):
    """
    This is what the user interacts with. 
    Notice it is lightning fast because it offloads work.
    """
    print(f"[Server] Received request from User {user_id}.")
    
    task_queue.put(user_id)
    
    return "[Server] Response sent to user: 'Your PDF is being processed!'"


worker_thread = threading.Thread(target=background_worker, daemon=True)
worker_thread.start()

print(handle_export_request("Alice_99"))
print("[Server] I am free to handle other users now!")

time.sleep(7)
print("Main Program Finished.")