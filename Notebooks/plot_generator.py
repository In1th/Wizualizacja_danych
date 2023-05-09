import matplotlib.pyplot as plt
import csv, sys, os

def create_plot(csv_file : str, output_dir : str):
    print("Starting plot generator")
    with open(csv_file, encoding='utf-8') as f:
        wojewodztwa = {}
        spamreader = csv.reader(f, delimiter=',', quotechar='"')
        next(spamreader)
        for row in spamreader:
            if row[0] not in wojewodztwa:
                wojewodztwa[row[0]] = {}
            if row[1] not in wojewodztwa[row[0]]:
                wojewodztwa[row[0]][row[1]] = 0
            wojewodztwa[row[0]][row[1]] += float(row[4])

        os.makedirs(output_dir, exist_ok=True)

        for woj in wojewodztwa:
            plt.scatter(wojewodztwa[woj].keys(), wojewodztwa[woj].values(), label=woj)
            plt.grid(True)
            plt.xticks(rotation=-45)
            plt.title(woj)
            plt.plot(wojewodztwa[woj].keys(), wojewodztwa[woj].values())
            plt.savefig(f"{output_dir}/{woj}.svg", format="svg")
            plt.clf()
        
        print("Plot generator finished")

if __name__ == "__main__":
    create_plot(sys.argv[1], sys.argv[2])