function collatz(n)
    i = 1
    while n > 1
        if n % 2 == 0
            n = n / 2
        else
            n = 3 * n + 1
        end
    i += 1
    end
    
    return i
end

function getMatrix(max)
    matrix = Array{Int64}(undef, 2, 0)
    for i in 1:max
        matrix = hcat(matrix, [i, collatz(i)])
    end
    return matrix
end

function getGreatest(matrix)
    greatestSteps = 0
    greatestNumber = 0
    n, matrixEnd = size(matrix) 
    for i in 1:matrixEnd
        if matrix[2, i] > greatestSteps
            greatestSteps = matrix[2, i]
            greatestNumber = matrix[1, i]
        end
    end
    return [greatestNumber, greatestSteps]
end

getGreatest(getMatrix(10000))
