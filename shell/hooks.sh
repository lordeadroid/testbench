list=$@

for element in $list
do
  if [ $element -eq 1 ]
  then 
    exit 10
  else
    echo $element
  fi
done
