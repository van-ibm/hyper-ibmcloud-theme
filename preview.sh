set=(1)
foreground=(39 30 31 32 33 34 35 36 37 90 91 92 93 94 95 96 97)
background=(49 40 41 42 43 44 45 46)

for s in "${set[@]}"
do 
    for f in "${foreground[@]}"
    do 
        for b in "${background[@]}"
        do 
            printf "\e[$s;$f;$b""m""       \e[1m◼︎      ""\e[0m "
        done
        echo
    done
done
echo ""