import subprocess
import os
from bs4 import BeautifulSoup


def get_version_number():
    major = os.environ.get("VERSION_MAJOR", "unset")
    if major == "unset":
        raise ValueError("Missing VERSION_MAJOR environment variable.")
    
    revision = subprocess.check_output(["git", "rev-list", "--count", "HEAD"]).decode('utf-8').strip()

    minor = subprocess.check_output(["git", "rev-list", "--count", "--merges", "master"]).strip()

    return major, minor, revision