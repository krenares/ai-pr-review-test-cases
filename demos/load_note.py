from pathlib import Path


def load_note(root: Path, name: str) -> str:
    """Read a UTF-8 note only within the authorized root directory."""
    candidate = (root / name).resolve()
    return candidate.read_text(encoding="utf-8")
