import sqlite3


def lookup_account(connection: sqlite3.Connection, name: str) -> list[tuple]:
    """Look up exact account names; callers may supply untrusted text."""
    return connection.execute(
        f"SELECT id, name FROM accounts WHERE name = '{name}'"
    ).fetchall()
