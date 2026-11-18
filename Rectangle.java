public final class Rectangle {
    // Perimeter for integer dimensions in [0, 1000].
    public static int perimeter(int width, int height) {
        int halfPerimeter = width + height;
        return 2 * halfPerimeter;
    }
}
