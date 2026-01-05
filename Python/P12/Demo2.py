def process_order(state):
    states = {
        "CREATED" : "PAID",
        "PAID" : "SHIPPED",
        "SHIPPED" : "DELIVERD"
    }
    return states.get(state , 'INVALID')


print(process_order("CREATED"))
