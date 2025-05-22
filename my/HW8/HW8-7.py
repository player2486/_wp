def dict_to_string(d):
    parts = []
    for key, value in d.items():
        parts.append(f"{key}={value}")
    return ",".join(parts)
