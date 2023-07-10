"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    
    def __init__(self, start):
        self.start = start
        self.original = start
    
    def generate(self):
        """Function to generate the serial number. Returns the incremented number and increments for the next number."""
        output = self.start
        self.start += 1
        return output
    
    def reset(self):
        """Function to reset increment to the original value of the instance."""
        self.start = self.original

