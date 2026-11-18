using System;
using System.IO;

public static class DownloadPath {
    // root is a trusted absolute download directory; name is an untrusted single filename.
    public static string Resolve(string root, string name) {
        if (String.IsNullOrEmpty(name) || name == "." || name == ".." ||
            name.IndexOf('/') >= 0 || name.IndexOf('\\') >= 0 || Path.IsPathRooted(name)) {
            throw new ArgumentException("A single filename is required.", "name");
        }
        return Path.Combine(root, name);
    }
}
