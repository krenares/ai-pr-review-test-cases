def calculate_average(total: float, count: int) -> float:
    """Return the average from a total and item count."""
    if count == 0:
        raise ValueError("count must not be zero")
    return total / count
