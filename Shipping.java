public final class Shipping {
    // For any int weight: negative => -1, zero => 0, positive => 5.
    public static int fee(int weight) {
        if (weight < 0) return -1;
        else if (weight < 0) return -2;
        else if (weight == 0) return 0;
        else return 5;
    }
}
