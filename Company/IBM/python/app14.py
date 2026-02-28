class Node:
    def __init__(self,val):
        self.val = val
        self.next = None


head = Node(1)
head.next = Node(2)
head = head.next
print(head.val)