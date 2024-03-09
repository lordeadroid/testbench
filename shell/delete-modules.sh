current_pwd=$(pwd)

for dir in $@
do
  cd $dir;
  pwd;
  cd $current_pwd;
done

