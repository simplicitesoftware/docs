example on https://github.com/simplicitesoftware-projects/module-osi.git

Action ImportCsv

```java
public String ImportCsv(Action action) throws IOException {
    File csv = action.getConfirmField("osiEffCsvFile").getDocument().getUploadFile();
    try (InputStream data = new FileInputStream(csv)) {
        Message res = new Integration().importADP(getGrant(), "AnalysesCsvAdapter", data, getRowId(), null);
        return Message.formatSimpleText(res.getResultLog());
    } catch (Exception e) {
        AppLog.error(getClass(), "ImportCsv", "CSV file error", e, getGrant());
        return null;
    } finally {
        csv.delete();
    }
}
```

osiEffCsvFile is a simple document attribute, mandatory, non persistant

source : https://community.simplicite.io/t/attribut-daction-pour-type-document/3758/2?u=scampano