


const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
  }
  
  const Jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm'
  }
  
  const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm'
  }
  
  const sara =  {
    name: 'sara',
    surname: 'd prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid'
  }
  
  const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob:2003,
    nationality: 'ecuador',
    gender: 'm'
  }
  
  const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1884,
    nationality: 'italy',
    gender: 'f'
  }
  
  const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut'
  }
  
  const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
  }

  const classmates = [lorenzo, Jan, jeremias, giovanni, sara, laura, eusebio, hugo]

  // 2 write a function that return the mean age of the students

  const calculateMeanAge = classmatesArray => {
    let meanAge = 0
    
    for (const classmate of classmatesArray) {
        const classmatesAge = 2025 - classmate.yob
        meanAge += classmatesAge
    }
    return meanAge/classmatesArray.length
  }
  console.log("the mean ange of the students is", calculateMeanAge)