/*
Question: Write an algorithm such that if an element in an NXN matrix is 0, its entire row and column are set tp 0.
*/

/*
-------examples------
1. example one
  4  1  3     4  1  0
[ 2 -4  0  -> 0  0  0]
  5  9  2     5  9  0 

2. example two
   5  2  0     0  0  0 
  [9  0  1] -> 0  0  0 ]
   2  9  3     2  0  0
*/
/*
---- Algorithm O(n*3)----
* find the element and mark it
* find thte row and column numbers
* make zero 0<row - i<n
* 
*/
const _metrix = [[4,1,3], [2,-4,0], [5,9,2]]; 

const zeroMetrix  = (matrix, n)=>{
    //Mark the positions
    for(let r=0; r<n; r++){
        for(let c=0; c<n; c++){
            if(matrix[r][c]===0) matrix[r][c]=true;
        }
    }
    // Find the location and zero it
    for(let r=0; r<n; r++){
        for(let c=0; c<n; c++){
            if(matrix[r][c]===true){
                //Zero the row
                for(let i=0; i<n; i++){
                    matrix[r][i] = 0;
                }
                // Zero the col
                for(let i=0; i<n; i++){
                    matrix[i][c] = 0;
                }

            }
        }

    }
    return matrix;
}

console.log(zeroMetrix(_metrix,3))