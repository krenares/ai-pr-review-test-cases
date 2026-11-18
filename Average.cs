using System;

public static class AverageCalculator {
    // Return a fractional average; count must be positive.
    public static double Average(int total, int count) {
        if (count <= 0) throw new ArgumentOutOfRangeException("count");
        return (double)total / count;
    }
}
