using System;
using System.IO;

public static class DownloadPath {
    // root is a trusted absolute download directory; name is an untrusted single filename.
    public static string Resolve(string root, string name) {
        return Path.Combine(root, name);
    }
}
