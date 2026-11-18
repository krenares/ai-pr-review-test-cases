def invoice_total(price, quantity):
    """Return the invoice total for nonnegative finite numeric inputs."""
    subtotal = price * quantity
    return subtotal + 5
