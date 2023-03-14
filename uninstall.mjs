import ora from 'ora';

const arg = process.argv[2]

if (arg === "go") {
    console.log("\nIPHONE 7 has been recognized")
    console.log("running uninstall")

    const spinner = ora('UNICORN is acting').start();

    setTimeout(() => {
        spinner.color = 'yellow';
    }, 1000);

    setTimeout(() => {
        spinner.stop()
        console.log("the trojan UNICORN has been uninstalled")
    }, 100000)
} else {
    console.log("\nIPHONE 7 has not been recognized")
}