const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';  

const firstRes = (firstRow.match(/а/g) || []).length; 
const secondRes = (secondRow.match(/а/g) || []).length;

if(secondRes > firstRes){
	console.log(secondRow);
}
else if(secondRes < firstRes){
	console.log(firstRow);
}
else if(secondRes == firstRes){
	console.log('They are equals');
};

// let justStr = '+71234567890';
justStr = prompt('Введите номер');
function formattedPhone() {
  let cleaned = ('' + justStr).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return '+'+match[1]+' ('+match[2]+') '+match[3]+'-'+match[4]+'-'+ match[5]
  };
}
console.log(formattedPhone());