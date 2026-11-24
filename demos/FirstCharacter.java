import java.io.IOException;
import java.io.Reader;
import java.util.function.Supplier;

public final class FirstCharacter {
    // Owns and closes the supplied reader, including when reading fails.
    public static int read(Supplier<Reader> open) throws IOException {
        Reader reader = open.get();
        return reader.read();
    }
}
