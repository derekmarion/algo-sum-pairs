def sum_pairs(arr, num):
    output = []
    to_skip = ()
    for element in arr:
        current_num = element
        to_skip += (current_num,)
        for sub_element in arr:
            if sub_element + current_num == num and sub_element not in to_skip:
                sub_arr = [current_num, sub_element]
                output.append(sub_arr)
    if output == []:
        return "unable to find pairs"
    return output