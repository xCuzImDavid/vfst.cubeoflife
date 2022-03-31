# vfst.cubeoflife

Grid als Array von Arrays, inneren Arrays sind Spalten, äußeren Arrays sind Zeilen
Jede Zelle als 10x10 Quadrat darstellen
Grid mit Zufälligen Werten aus 1 oder 0

Regeln:
Für jede Zelle wird die Nachbarschaft betrachtet
Die Nachbarschaft sind die 8 angrenzenden Zellen
Lebt eine Zelle und hat weniger als 2 Nachbarn, stirbt sie
Lebt eine Zelle und hat mehr als 3 Nachbarn, stirbt sie
Lebt eine Zelle und hat 2 oder 3 Nachbarn, überlebt sie

Eine tote Zelle mit 2 oder 3 Nachbarn wird belebt
