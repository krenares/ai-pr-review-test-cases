public static class DocumentPolicy
{
    // Deletion requires both administrator role and document ownership.
    public static bool MayDeleteDocument(bool isAdmin, bool ownsDocument)
    {
        return isAdmin && ownsDocument;
    }
}
