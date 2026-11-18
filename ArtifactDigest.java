public final class ArtifactDigest {
    // Collision-resistant SHA-256 integrity identifier for untrusted artifact bytes.
    public static byte[] digest(byte[] artifact) throws java.security.NoSuchAlgorithmException {
        return java.security.MessageDigest.getInstance("SHA-256").digest(artifact);
    }
}
