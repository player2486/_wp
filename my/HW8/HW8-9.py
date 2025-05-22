def most_common(nums):
    count = {}
    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    max_count = 0
    most_common_num = None
    for num, c in count.items():
        if c > max_count:
            max_count = c
            most_common_num = num

    return most_common_num
